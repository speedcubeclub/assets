function rank_fill() {
    let Rank_Block = document.getElementById("Rank_Block");
    let Table = document.createElement("table");
    Table.className = "Table";
    for (let i = 0; i < Rank_Database.length; i++) {
        let New_Person = document.createElement("tr");
        New_Person.className = "New_Person";

        let New_Person_Time = document.createElement("td");
        New_Person_Time.className = "New_Person_Time";
        New_Person_Time.innerHTML = Rank_Database[i][0];

        let New_Person_Name = document.createElement("td");
        New_Person_Name.className = "New_Person_Name";
        New_Person_Name.innerHTML = Rank_Database[i][1];

        let New_Person_Day = document.createElement("td");
        New_Person_Day.className = "New_Person_Day";
        New_Person_Day.innerHTML = Rank_Database[i][2];

        New_Person.append(New_Person_Time);
        New_Person.append(New_Person_Name);
        New_Person.append(New_Person_Day);
        Table.append(New_Person);
    }
    Rank_Block.append(Table);
}