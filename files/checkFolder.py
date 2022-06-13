from cmath import nan
import os
import pandas as pd
import numpy as np


#Read all Folder Contents
os.chdir('C:\\Users\\tmatlock\\Documents\\SystemAccessAudit')
DIR = os.listdir()
#print(DIR)

#Partial File Name
transferName = 'Transfers'
adName = "AD"

#TransferList
transferList = []
#AD List 
adList = []


#print(DIR)
for f in DIR:
    #Get only Transfer Files
    if transferName == f[:len(transferName)]:
        transferList.append(f)
    if adName == f[:len(adName)]:
        adList.append(f)
#print(transferList)
#print(adList)

TransferListItems = []
AdListItems = []

for x in transferList:
    TransferListItems.append(pd.read_excel(x).to_records())

for x in adList:
    AdListItems.append(pd.read_csv(x).to_records())

#print(TransferListItems)
#Record List 
# recordListTransfer = []
# recordListAD = []

transferedEmployee = []
adEmployee = []

for record in TransferListItems:
    for x in record:
        for j in x: 
            if j == "Transfer":
                transferedEmployee.append(x)




#print(transferedEmployee)

for x in transferedEmployee:
    for i in x:
        print(i)


# # print(recordListAD)
# # print(recordListTransfer)

# # for x in adList:
# #     for j in x: 
# #         if x != nan:
# #             adEmployee.append(x)
# #print(recordListAD)



# for emp in recordListAD:
#     adEmployee.append(emp)
# print(adEmployee)
# print(transferedEmployee)

# #print(list(set(adEmployee) - set(transferedEmployee)))

# #print(recordTransferList)

# path = 'C:\\Users\\tmatlock\\Documents\\SystemAccessAudit_Results\\Transfers.xlsx'

# dataframe = pd.DataFrame(transferedEmployee)
# #print(dataframe)
# #dataframe.to_excel(path, sheet_name="Transfers.xlsx",)