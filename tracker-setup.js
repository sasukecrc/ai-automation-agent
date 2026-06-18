// Google Sheets Job Tracker Setup
// Run via OpenCode Composio tools

const SHEET_HEADERS = [
  'Date Found',
  'Job Title',
  'Company',
  'Location',
  'Salary',
  'Job URL',
  'Source',
  'Match Score',
  'Status',
  'Skills Required',
  'Notes',
  'Follow-up Date'
];

const STATUSES = [
  'To Apply',
  'Applied',
  'Interviewing',
  'Offer',
  'Rejected',
  'Accepted'
];

module.exports = { SHEET_HEADERS, STATUSES };