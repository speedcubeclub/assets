function record_fill() {
    /*
[日期, 
[姓名, 时间1, 时间2, 时间3, 最快]]
*/
    let Record_Block = document.getElementById("Record_Block");
    Record_Block.className("Table");
    for (let i = 0; i < Record_Database.length; i++) {
        let New_Day_Table = document.createElement("table");
        let New_Day_Title_tr = document.createElement("tr");
        let New_Day_Title = document.createElement("td");
        New_Day_Title.colSpan = "5";
        New_Day_Title.className = "New_Day_Title";
        New_Day_Title_tr.append(New_Day_Title);
        New_Day_Table.append(New_Day_Title_tr);

        let th_User_Part = document.createElement("tr");

        let th_Name = document.createElement("td");
        th_Name.className = "th_";
        th_Name.innerHTML = "Name"
        let th_Times_1 = document.createElement("td");
        th_Times_1.className = "th_";
        th_Times_1.innerHTML = "Try-1"
        let th_Times_2 = document.createElement("td");
        th_Times_2.className = "th_";
        th_Times_2.innerHTML = "Try-2"
        let th_Times_3 = document.createElement("td");
        th_Times_3.className = "th_";
        th_Times_3.innerHTML = "Try-3"
        let th_Times_best = document.createElement("td");
        th_Times_best.className = "th_";
        th_Times_best.innerHTML = "Best"

        th_User_Part.append(th_Name);
        th_User_Part.append(th_Times_1);
        th_User_Part.append(th_Times_2);
        th_User_Part.append(th_Times_3);
        th_User_Part.append(th_Times_best);

        th_User_Part.append(th_User_Part);

        let User_Part = document.createElement("tr");
        for (let j = 0; j < Record_Database[i][1].length; j++) {
            let Name = document.createElement("td");
            Name.className = "Record_Name";
            Name.innerHTML = Record_Database[i][1][0];

            let Times_1 = document.createElement("td");
            Times_1.className = "Record_Times_1";
            Times_1.innerHTML = Record_Database[i][1][1];

            let Times_2 = document.createElement("td");
            Times_2.className = "Record_Times_2";
            Times_2.innerHTML = Record_Database[i][1][2];

            let Times_3 = document.createElement("td");
            Times_3.className = "Record_Times_3";
            Times_3.innerHTML = Record_Database[i][1][3];

            let Times_best = document.createElement("td");
            Times_best.className = "Record_Times_best";
            Times_best.innerHTML = Record_Database[i][1][4];

            User_Part.append(Name);
            User_Part.append(Times_1);
            User_Part.append(Times_2);
            User_Part.append(Times_3);
            User_Part.append(Times_best);
        }
        New_Day_Table.append(User_Part);

        Record_Block.append(New_Day_Table);
    }
}