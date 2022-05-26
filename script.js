// Uzduotis su lentele

// mygtuko funkcijos pradzia
document.getElementById('click').onclick=function(){

    // is html <input type="number" id='rows' arba 'cols'>
    const rows=document.getElementById('rows').value
    const cols=document.getElementById('cols').value
    
// lenteles isvaizdos pradzia
   let lentele='<table border="1" class="table">'
   // lenteles funkcijos pradzia
    function createTable(rows,cols){
        // irasomas skaiciui eilutei
        for(let r=1;r<=rows;r++){
            // lenteles generavimo pradzia
            lentele=lentele+'<tr>'
           // irasomas skaicius stulpeliui
            for(let c=1;c<=cols;c++){
                // tekstas lenteleje
                lentele=lentele+'<td>'+'<p>stulpelis</p>'+'</td>'
            }
            // lenteles generavimo pabaiga
            letele=lentele+'</tr>'
        }
        // lenteles isvaizdos pabaiga
        lentele=lentele+'</table>'
        // konteineris
        document.getElementById('container').innerHTML=lentele    
   }
// lenteles funkcijos pabaiga

   //lenteles sukurimas
   createTable(rows,cols)
}
// mygtuko funkcijos pabaiga