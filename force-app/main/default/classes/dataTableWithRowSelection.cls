public class dataTableWithRowSelection {
    @AuraEnabled(cacheable=true)
    Public static List<Contact> getContactList(id lwcRecordId){
        List<Contact> contactlst = [select id,Name,Phone,AccountId from Contact Where AccountId =: lwcRecordId ];
        return contactlst;
        
    }
}