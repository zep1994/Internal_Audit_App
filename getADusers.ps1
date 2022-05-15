#Mirror Lake
get-aduser -Filter 'employeenumber -like "*"' -properties name,EmailAddress,company,Created,LastLogonDate,City,Office,StreetAddress,State,Enabled | Select-Object name,EmailAddress,company,Created,LastLogonDate,City,Office,StreetAddress,State,Enabled | Export-Csv C:\Users\tmatlock\Documents\SystemAccesAudit\MLUsersAndAddresses.csv -notypeinformation
# Resinall HattiesBurg
Get-ADUser -server 10.10.168.15 -Filter 'employeenumber -like "*"' -Properties name,EmployeeNumber,telephoneNumber,EmailAddress,Enabled | Select-Object name,EmployeeNumber,telephoneNumber,EmailAddress,Enabled | Export-Csv C:\Users\tmatlock\Documents\SystemAccesAudit\ADExportForEC_Hattiesburg.csv -force -notypeinformation
#Resinall Severn
Get-ADUser -server 10.6.6.93 -Filter 'employeenumber -like "*"' -Properties name,EmployeeNumber,telephoneNumber,EmailAddress,Enabled | Select-Object name,EmployeeNumber,telephoneNumber,EmailAddress,Enabled | Export-Csv C:\Users\tmatlock\Documents\SystemAccesAudit\ADExportForEC_Severn.csv -force -notypeinformation
#Crafco
Get-ADUser -server 10.10.116.101 -Filter 'employeenumber -like "*"' -Properties name,EmployeeNumber,telephoneNumber,EmailAddress,Enabled | Select-Object name,EmployeeNumber,telephoneNumber,EmailAddress,Enabled | Export-Csv C:\Users\tmatlock\Documents\SystemAccesAudit\ADExportForEC_Crafco.csv -force -notypeinformation
