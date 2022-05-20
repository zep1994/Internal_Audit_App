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

counter = 1
