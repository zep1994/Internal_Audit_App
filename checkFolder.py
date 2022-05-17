import os
import pandas as pd
import numpy as np
import glob

#Read all Folder Contents
os.chdir('C:\\Users\\tmatlock\\Documents\\SystemAccessAudit')
DIR = os.listdir()

#Partial File Name
transferName = 'Transfers'

#TransferList
transferList = []

#print(DIR)
for f in DIR:
    #Get only Transfer Files
    if transferName == f[:len(transferName)]:
        transferList.append(f)

#print(transferList)

#Record List 
recordList = []

transferedEmployee = []

for x in transferList:
    recordList.append(pd.read_excel(x).to_records())

#print(recordList)

for record in recordList:
    for x in record:
        for j in x: 
            if j == "Transfer":
                transferedEmployee.append(x)

#print(transferedEmployee)

path = 'C:\\Users\\tmatlock\\Documents\\SystemAccessAudit\\Transfers.xlsx'

dataframe = pd.DataFrame(transferedEmployee)
print(dataframe)
dataframe.to_excel(path, sheet_name="Transfers.xlsx",)