names_of_ppl=[];
function submit(){
    var name_1=document.getElementById("in_1").value;
    var name_2=document.getElementById("in_2").value;
    var name_3=document.getElementById("in_3").value;
    var name_4=document.getElementById("in_4").value;

    names_of_ppl.push(name_1);
    names_of_ppl.push(name_2);
    names_of_ppl.push(name_3);
    names_of_ppl.push(name_4);

    console.log(names_of_ppl);

    document.getElementById("display_name").innerHTML=names_of_ppl;
    document.getElementById("b_1").style.display="none";
    document.getElementById("b_2").style.display="inline-block";
    
}

function sorting(){
    names_of_ppl.sort();
    console.log(names_of_ppl);

    document.getElementById("display_name").innerHTML=names_of_ppl;
    document.getElementById("b_1").style.display="none";
    document.getElementById("b_2").style.display="none";
    document.getElementById("b_3").style.display="inline-block";
}

function clear(){
    document.getElementById("in_1").innerHTML=" ";
    document.getElementById("in_2").innerHTML=" ";
    document.getElementById("in_3").innerHTML=" ";
    document.getElementById("in_4").innerHTML=" ";
    document.getElementById("dsplay_name").innerHTML=" ";
}