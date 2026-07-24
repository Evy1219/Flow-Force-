export type IndustryKey =
  | 'Construction'
  | 'Healthcare'
  | 'Restaurant'
  | 'Retail'
  | 'Warehouse'
  | 'Manufacturing'
  | 'Law Firm'
  | 'Accounting'
  | 'Marketing Agency'
  | 'Software Company'
  | 'Education'
  | 'Non-Profit'
  | 'Government'
  | 'Automotive'
  | 'Real Estate'
  | 'Fitness'
  | 'Salon'
  | 'Hospitality'
  | 'Engineering'
  | 'Architecture'
  | 'Custom';

export type IndustryConfig = {
  navItems: string[];
  dashboardWidgets: string[];
  modules: string[];
  terminology: {
    singular: string;
    plural: string;
  };
};

export const industryCatalog: Record<IndustryKey, IndustryConfig> = {
  Construction: {
    navItems: ['Projects', 'Job Sites', 'Equipment', 'Safety Reports', 'Daily Logs'],
    dashboardWidgets: ['Active Projects', 'Job Site Health', 'Crew Utilization', 'Safety Alerts'],
    modules: ['Projects', 'Equipment', 'Job Sites', 'Safety Reports', 'Materials'],
    terminology: { singular: 'Project', plural: 'Projects' },
  },
  Healthcare: {
    navItems: ['Patients', 'Appointments', 'Providers', 'Billing', 'Records'],
    dashboardWidgets: ['Patient Load', 'Visit Volume', 'Pending Claims', 'Care Coordination'],
    modules: ['Patients', 'Appointments', 'Medical Records', 'Providers', 'Billing'],
    terminology: { singular: 'Patient', plural: 'Patients' },
  },
  Restaurant: {
    navItems: ['Orders', 'Reservations', 'Inventory', 'Kitchen Display', 'Staff Schedule'],
    dashboardWidgets: ['Sales Today', 'Table Turnover', 'Stock Alerts', 'Team Coverage'],
    modules: ['Orders', 'Reservations', 'Inventory', 'Kitchen Display', 'Staff Schedule'],
    terminology: { singular: 'Order', plural: 'Orders' },
  },
  Retail: {
    navItems: ['Inventory', 'POS', 'Products', 'Suppliers', 'Sales'],
    dashboardWidgets: ['Sales Velocity', 'Low Stock', 'Returns', 'Store Revenue'],
    modules: ['Inventory', 'POS', 'Products', 'Suppliers', 'Sales'],
    terminology: { singular: 'Product', plural: 'Products' },
  },
  Warehouse: {
    navItems: ['Stock', 'Locations', 'Receiving', 'Shipping', 'Picking'],
    dashboardWidgets: ['Inventory Accuracy', 'Inbound Orders', 'Outbound Volume', 'Dock Status'],
    modules: ['Stock', 'Locations', 'Receiving', 'Shipping', 'Picking'],
    terminology: { singular: 'Location', plural: 'Locations' },
  },
  Manufacturing: {
    navItems: ['Production', 'Machines', 'Maintenance', 'Quality Control', 'Work Orders'],
    dashboardWidgets: ['OEE', 'Machine Uptime', 'Work Orders', 'Quality Events'],
    modules: ['Production', 'Machines', 'Maintenance', 'Quality Control', 'Work Orders'],
    terminology: { singular: 'Work Order', plural: 'Work Orders' },
  },
  'Law Firm': {
    navItems: ['Matters', 'Clients', 'Calendar', 'Billing', 'Documents'],
    dashboardWidgets: ['Open Matters', 'Billing', 'Deadlines', 'Court Dates'],
    modules: ['Matters', 'Clients', 'Calendar', 'Billing', 'Documents'],
    terminology: { singular: 'Matter', plural: 'Matters' },
  },
  Accounting: {
    navItems: ['Invoices', 'Clients', 'Assets', 'Payroll', 'Reports'],
    dashboardWidgets: ['Cash Flow', 'Collections', 'Expenses', 'Reconciliations'],
    modules: ['Invoices', 'Clients', 'Assets', 'Payroll', 'Reports'],
    terminology: { singular: 'Invoice', plural: 'Invoices' },
  },
  'Marketing Agency': {
    navItems: ['Clients', 'Campaigns', 'Analytics', 'Invoices', 'Assets'],
    dashboardWidgets: ['Campaign ROI', 'Lead Volume', 'Budget Health', 'Performance Trends'],
    modules: ['Clients', 'Campaigns', 'Analytics', 'Invoices', 'Assets'],
    terminology: { singular: 'Campaign', plural: 'Campaigns' },
  },
  'Software Company': {
    navItems: ['Development', 'Sprints', 'Issues', 'Repositories', 'Deployments'],
    dashboardWidgets: ['Sprint Velocity', 'Open Issues', 'Release Health', 'Deployment Status'],
    modules: ['Development', 'Sprints', 'Issues', 'Repositories', 'Deployments'],
    terminology: { singular: 'Sprint', plural: 'Sprints' },
  },
  Education: {
    navItems: ['Students', 'Teachers', 'Courses', 'Attendance', 'Grades'],
    dashboardWidgets: ['Enrollment', 'Attendance Rate', 'Grade Trends', 'Course Health'],
    modules: ['Students', 'Teachers', 'Courses', 'Attendance', 'Grades'],
    terminology: { singular: 'Student', plural: 'Students' },
  },
  'Non-Profit': {
    navItems: ['Programs', 'Donors', 'Volunteers', 'Events', 'Reports'],
    dashboardWidgets: ['Donor Impact', 'Volunteer Coverage', 'Event Attendance', 'Program Reach'],
    modules: ['Programs', 'Donors', 'Volunteers', 'Events', 'Reports'],
    terminology: { singular: 'Program', plural: 'Programs' },
  },
  Government: {
    navItems: ['Departments', 'Projects', 'Compliance', 'Requests', 'Reports'],
    dashboardWidgets: ['Service Requests', 'Compliance Tasks', 'Open Projects', 'Backlog'],
    modules: ['Departments', 'Projects', 'Compliance', 'Requests', 'Reports'],
    terminology: { singular: 'Request', plural: 'Requests' },
  },
  Automotive: {
    navItems: ['Vehicles', 'Service Orders', 'Customers', 'Inventory', 'Appointments'],
    dashboardWidgets: ['Service Queue', 'Fleet Status', 'Job Completion', 'Parts Availability'],
    modules: ['Vehicles', 'Service Orders', 'Customers', 'Inventory', 'Appointments'],
    terminology: { singular: 'Vehicle', plural: 'Vehicles' },
  },
  'Real Estate': {
    navItems: ['Properties', 'Clients', 'Leases', 'Tours', 'Transactions'],
    dashboardWidgets: ['Portfolio Value', 'Closing Pipeline', 'Tour Requests', 'Lease Renewals'],
    modules: ['Properties', 'Clients', 'Leases', 'Tours', 'Transactions'],
    terminology: { singular: 'Property', plural: 'Properties' },
  },
  Fitness: {
    navItems: ['Members', 'Classes', 'Trainings', 'Nutrition', 'Attendance'],
    dashboardWidgets: ['Member Retention', 'Class Attendance', 'Session Capacity', 'Health Metrics'],
    modules: ['Members', 'Classes', 'Trainings', 'Nutrition', 'Attendance'],
    terminology: { singular: 'Member', plural: 'Members' },
  },
  Salon: {
    navItems: ['Clients', 'Services', 'Bookings', 'Inventory', 'Staff'],
    dashboardWidgets: ['Booking Load', 'Treatment Revenue', 'Stock Alerts', 'Roster Health'],
    modules: ['Clients', 'Services', 'Bookings', 'Inventory', 'Staff'],
    terminology: { singular: 'Service', plural: 'Services' },
  },
  Hospitality: {
    navItems: ['Guests', 'Reservations', 'Rooms', 'Housekeeping', 'Orders'],
    dashboardWidgets: ['Occupancy', 'Check-In Status', 'Guest Requests', 'Team Availability'],
    modules: ['Guests', 'Reservations', 'Rooms', 'Housekeeping', 'Orders'],
    terminology: { singular: 'Guest', plural: 'Guests' },
  },
  Engineering: {
    navItems: ['Projects', 'Drawings', 'Specs', 'Submittals', 'Issues'],
    dashboardWidgets: ['Design Status', 'Submittals', 'Risks', 'Milestones'],
    modules: ['Projects', 'Drawings', 'Specs', 'Submittals', 'Issues'],
    terminology: { singular: 'Project', plural: 'Projects' },
  },
  Architecture: {
    navItems: ['Projects', 'Clients', 'Plans', 'Approvals', 'Schedules'],
    dashboardWidgets: ['Design Pipeline', 'Approval Queue', 'Project Health', 'Team Load'],
    modules: ['Projects', 'Clients', 'Plans', 'Approvals', 'Schedules'],
    terminology: { singular: 'Project', plural: 'Projects' },
  },
  Custom: {
    navItems: ['Workspace', 'Projects', 'People', 'Reports', 'Automation'],
    dashboardWidgets: ['KPIs', 'Recent Work', 'Team Changes', 'Activity Feed'],
    modules: ['Workspace', 'Projects', 'People', 'Reports', 'Automation'],
    terminology: { singular: 'Workspace', plural: 'Workspace' },
  },
};

export const defaultIndustry: IndustryKey = 'Software Company';

export function getIndustryConfig(industry: IndustryKey = defaultIndustry): IndustryConfig {
  return industryCatalog[industry];
}
