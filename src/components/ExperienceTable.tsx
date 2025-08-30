
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "./ui/table";

export const ExperienceTable = () => {
  return (
    <div className="mb-8 overflow-x-auto">
      <Table className="w-full border border-gray-100">
        <TableHeader className="bg-accent/5">
          <TableRow>
            <TableHead className="font-semibold">Company Name</TableHead>
            <TableHead className="font-semibold">Designation</TableHead>
            <TableHead className="font-semibold">Start Date</TableHead>
            <TableHead className="font-semibold">End Date</TableHead>
            <TableHead className="font-semibold">Experience (in Years)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Baazi Games</TableCell>
            <TableCell>SDET-III</TableCell>
            <TableCell>13 Mar 2025</TableCell>
            <TableCell>29 Aug 2025</TableCell>
            <TableCell>0 years 5 months 16 days</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Airtel Payments Bank</TableCell>
            <TableCell>SDET-III</TableCell>
            <TableCell>28 Mar 2023</TableCell>
            <TableCell>11 Mar 2025</TableCell>
            <TableCell>1 years 11 months 11 days</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Renegade Insurance</TableCell>
            <TableCell>Sr. QA Engineer</TableCell>
            <TableCell>9 Dec 2020</TableCell>
            <TableCell>15 Mar 2023</TableCell>
            <TableCell>2 years 3 months 6 days</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>MAPIT</TableCell>
            <TableCell>Test Engineer</TableCell>
            <TableCell>10 Aug 2020</TableCell>
            <TableCell>20 Nov 2020</TableCell>
            <TableCell>0 years 3 months 12 days</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>PayU Payments Pvt Ltd</TableCell>
            <TableCell>Team Lead In Test</TableCell>
            <TableCell>28 Oct 2015</TableCell>
            <TableCell>31 Jul 2020</TableCell>
            <TableCell>4 years 9 months 8 days</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Systango Infosoft Pvt Ltd</TableCell>
            <TableCell>Business Management Analyst</TableCell>
            <TableCell>06 Jan 2014</TableCell>
            <TableCell>26 Oct 2015</TableCell>
            <TableCell>1 years 9 months 20 days</TableCell>
          </TableRow>
          <TableRow className="font-medium bg-accent/5">
            <TableCell>Total Experience</TableCell>
            <TableCell>-</TableCell>
            <TableCell>-</TableCell>
            <TableCell>-</TableCell>
            <TableCell>11 years 6 months 17 days</TableCell>
          </TableRow>
          <TableRow className="font-medium">
            <TableCell>Relevant Experience in Testing</TableCell>
            <TableCell>-</TableCell>
            <TableCell>-</TableCell>
            <TableCell>-</TableCell>
            <TableCell className="text-accent">9 years 8 months 27 days</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
