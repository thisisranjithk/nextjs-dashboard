import { Card } from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { revenue } from "../lib/placeholder-data";
import connectDB from "@/config/db";
import Invoice from "../../models/Invoices";
import Customer from "../../models/Customers.js";

export default async function Page() {
  await connectDB();
  const latestInvoices = await Invoice.find({})
    .sort({ createdAt: -1 })
    .limit(5);
  const Invoices = await Invoice.find({}).lean();
  const Customers = await Customer.find({}).lean();

  const totalPendingInvoices = await Invoice.countDocuments({
    status: "pending",
  });
  const totalPaidInvoices = await Invoice.countDocuments({ status: "paid" });

  const numberOfInvoices = Invoices?.length;
  const numberOfCustomers = Customers?.length;
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}
