function get_year(){
    year_sys = new Date().getFullYear()
    year_span = document.getElementById("year")
    year_span.innerHTML = year_sys
}

get_year()