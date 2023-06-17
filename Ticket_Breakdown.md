# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Assumptions

- An agent is working with multiple facilities.
- There is a auto generated primary key "id" against each "Facility_Agents_Id" table's row but we are not using it in reports as it is not customisable by facilities.

## Tickets
1. Create a new table Named "Facility_Agents_Id" which will contain relations with Facilities and Agents. This table will be responsible to store
"custom_id" for each facility against every agent. This table will be having following columns;

- Id (table's primary key)
- FId (Facility_Id as a Foreign Key)
- AId (Agent_Id as a Foreign Key)
- Custom_Id (Generated Custom_Id for Agents of specific Facilities)

### Acceptance Criteria
- There must be 4 non-nullable columns with above mentioned names.
- Correct schema should be created for this table.

### Time/Effort Estimate
- Should not take more than 30 minutes

2. This ticket will be responsible to create a Custom_Id.

- Create a function `generateCustomId` which will take facility and agent id and create a "custom_id" using `UUID (Universal Unique Identifier)` package.
- Save this "custom_id", "facility_id", "agent_id" in "Facility_Agents_Id" table.

### Acceptance Criteria
- Every "custom_id" must be unique.
- Correct Ids must be inserted into table rows.

### Time/Effort Estimate
- Should be done in 45 minutes

3. This ticket will be responsible to include "custom_id" in Agent's metadata when returning Shift records.

- Modify `getShiftsByFacility` function such as it fetches "custom_id" from "Facility_Agents_Id" using facility_id and agent_id and add into the agent's metadata.

### Acceptance Criteria
- Shift records contain complete agent info including newly created custom_id

### Time/Effort Estimate
- Should be done in 45 minutes

4. This ticket will be responsible to generate a report.

- Modify `generateReport` function such as it uses "custom_id" generated in last ticket instead of Agents internal table id, in the report.

### Acceptance Criteria
- It creates a report using newly created custom_id.

### Time/Effort Estimate
- Should be done in 45 minutes