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
ADExport_ML = 'C:\\Users\\tmatlock\\Documents\\SystemAccessAudit\\ADMLUsersAndAddresses.csv'

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

#Print Excel Report To Screen
#print(df)
#print(crafco)
# print(Hattiesburg)
# print(Severn)
# print(Mirror_Lake)

#convert each record into list
report = df.to_records()
crafcoAD = crafco.to_records()
HattiesburgAD = Hattiesburg.to_records()
SevernAD = Severn.to_records()
Mirror_LakeAD = Mirror_Lake.to_records()

#Store Withdrawn Employees
withDrawnEmployees = []

#loop through each object
for x in report:
    #print(x)
    if x[11] == "Withdrawn":
        withDrawnEmployees.append(x)
        
#print(withDrawnEmployees)

Ad_Users = []

for x in crafcoAD:
    Ad_Users.append(x)

for x in HattiesburgAD:
    Ad_Users.append(x)

for x in SevernAD:
    Ad_Users.append(x)

for x in Mirror_LakeAD:
    Ad_Users.append(x)

#print(withDrawnEmployees)

To_Remove = []

#loop through Withdrawn Employees
for x in withDrawnEmployees:
    for i in Ad_Users:
        if x[1] == i[2]:
            To_Remove.append(x)

path = 'C:\\Users\\tmatlock\\Documents\\SystemAccessAudit\\To_Remove.xlsx'

dataframe = pd.DataFrame(To_Remove)
print(dataframe)
dataframe.to_excel(path, sheet_name="To_Remove.xlsx",)
