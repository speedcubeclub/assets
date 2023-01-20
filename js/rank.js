let Last_Big_N = -Infinity;

function rank_fill() {
    /*[分钟,秒,毫秒,选手姓名,日期]*/
    let Rank_Block = document.getElementById("Rank_Block");
    let Table = document.createElement("table");
    Table.className = "Table";
    for (let i = 0; i < (Rank_Database.length - 1); i++) {
        let New_Person = document.createElement("tr");
        New_Person.className = "New_Person";

        let New_Person_N = document.createElement("td");
        New_Person_N.className = "New_Person_N";
        New_Person_N.innerHTML = i + 1;
        if (i == 0) {
            New_Person_N.style.backgroundColor = "gold";
        } else if (i == 1) {
            New_Person_N.style.backgroundColor = "silver";
        } else if (i == 2) {
            New_Person_N.style.backgroundColor = "#8B4513";
        }

        let New_Person_Time = document.createElement("td");
        New_Person_Time.className = "New_Person_Time";
        let ThisTime_index = Infinity;
        let out_time = "";
        let N_index;
        let Last_Big_N_Pr;
        for (let index = 0; index < Rank_Database.length; index++) {
            console.log("检索数组：" + index);
            if ((Rank_Database[index][0] * 60000) + (Rank_Database[index][1] * 1000) + Rank_Database[index][2] < ThisTime_index && (Rank_Database[index][0] * 60000) + (Rank_Database[index][1] * 1000) + Rank_Database[index][2] > Last_Big_N) {
                console.log("成功获取本次最小值：" + index);
                ThisTime_index = (Rank_Database[index][0] * 60000) + (Rank_Database[index][1] * 1000) + Rank_Database[index][2];
                Last_Big_N_Pr = (Rank_Database[index][0] * 60000) + (Rank_Database[index][1] * 1000) + Rank_Database[index][2];
                out_time = String(Rank_Database[index][0]) + ":" + String(Rank_Database[index][1]) + "." + String(Rank_Database[index][2]);
                N_index = index;
            }
        }
        Last_Big_N = Last_Big_N_Pr;
        New_Person_Time.innerHTML = out_time;


        let New_Person_Name = document.createElement("td");
        New_Person_Name.className = "New_Person_Name";
        console.log("选手排名成功：" + Rank_Database[N_index][3]);
        New_Person_Name.innerHTML = Rank_Database[N_index][3];

        let New_Person_Day = document.createElement("td");
        New_Person_Day.className = "New_Person_Day";
        New_Person_Day.innerHTML = Rank_Database[N_index][4];

        New_Person.append(New_Person_N);
        New_Person.append(New_Person_Time);
        New_Person.append(New_Person_Name);
        New_Person.append(New_Person_Day);
        Table.append(New_Person);
    }
    Rank_Block.append(Table);
}