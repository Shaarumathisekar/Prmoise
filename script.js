async function bar(){
    let res=await fetch("https://data.covid19india.org/v4/min/data.min.json");
    let result=await res.json();
    console.log('confirmed:${result.TN.total.confirmed}');
}
bar();
