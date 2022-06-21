import pandas as pd
import numpy as np

#import the report
ChangeReport = 'C:\\Users\\tmatlock\\Documents\\SystemAccessAudit\\Change report 100121043022.XLSX'
#import the report
ADExport_Crafco = 'C:\\Users\\tmatlock\\Documents\\SystemAccessAudit\\ADExportForEC_Crafco.csv'
#import the report
ADExportForEC_Hattiesburg = 'C:\\Users\\tmatlock\\Documents\\SystemAccessAudit\\ADExportForEC_Hattiesburg.csv'
#import the report
ADExportForEC_Severn = 'C:\\Users\\tmatlock\\Documents\\SystemAccessAudit\\ADExportForEC_Severn.csv'
#import the report
ADExport_ML = 'C:\\Users\\tmatlock\\Documents\\SystemAccessAudit\\UsersAndAddresses_ML.csv'

test = 'Test.xlsx'

#Read Excel Report
df = pd.read_excel(ChangeReport)
#Read CSV Report
crafco = pd.read_csv(ADExport_Crafco)
#Read CSV Report
Hattiesburg = pd.read_csv(ADExportForEC_Hattiesburg)
#Read CSV Report
Severn = pd.read_csv(ADExportForEC_Severn)
#Read CSV Report
Mirror_Lake = pd.read_csv(ADExport_ML)

Test = pd.read_excel(test)

#Print Excel Report To Screen
# print(df)
# print(crafco)
# print(Hattiesburg)
# print(Severn)
# print(Mirror_Lake)

#convert each record into list
report = df.to_records()
crafcoAD = crafco.to_records()
HattiesburgAD = Hattiesburg.to_records()
SevernAD = Severn.to_records()
Mirror_LakeAD = Mirror_Lake.to_records()
test2 = Test.to_records()

#Store New Hires Employees
newHires = []

#loop through each object
for x in report:
    #print(x)
    if x[10] == "New Hire" or x[10]=="Promotion" or x[10]=="Re-hire":
        newHires.append(x)
        
#print(newHires)

Ad_Users = []

# for x in crafcoAD:
#     Ad_Users.append(x)

# for x in HattiesburgAD:
#     Ad_Users.append(x)

# for x in SevernAD:
#     Ad_Users.append(x)

# for x in Mirror_LakeAD:
#     Ad_Users.append(x)

for x in test2:
    Ad_Users.append(x)

Active_Employees = []

#loop through Withdrawn Employees
for x in newHires:
    for i in Ad_Users:
        if x[1] != i[2]:
            Active_Employees.append(x)

#print(Active_Employees)

path = 'C:\\Users\\tmatlock\\Documents\\SystemAccessAudit\\Active_Employees_not.xlsx'

dataframe = pd.DataFrame(Active_Employees)
print(dataframe)
dataframe.to_excel(path, sheet_name="Active_Employees_not.xlsx",)
