from cmath import nan
import os
import pandas as pd
import numpy as np

from checkFolder import AdListItems

path="C:\\Users\\tmatlock\\Documents\\SystemAccessAudit"

#Read all Folder Contents
os.chdir('C:\\Users\\tmatlock\\Documents\\SystemAccessAudit')
DIR = os.listdir()

#Partial File Name
transferName = 'Transfers'
adName = "AD"

#TransferList
transferList = []
#AD List 
adList = []



for f in DIR:
    #Get only Transfer Files
    if transferName == f[:len(transferName)]:
        transferList.append(f)
    if adName == f[:len(adName)]:
        adList.append(f)


AdListItems = []
TransferListItems = []  

for item in transferList: 
    TransferListItems.append(pd.read_excel(path+'\\'+item).to_records())

for item in adList:
    AdListItems.append(pd.read_csv(path+'\\'+item).to_records())

transferedEmployee = []
adEmployee = []

for record in TransferListItems:
    for x in record:
        for j in x: 
            if j == "Transfer":
                transferedEmployee.append(x)

empList = []

for transferRecord in transferedEmployee:
    for item in AdListItems:
        for x in item:
            if transferRecord[3] == x[2]:
                if isinstance(x[2], float):
                    empList.append(int(x[2]))

print(empList)