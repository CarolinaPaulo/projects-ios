
function setImage(){
    var obj = document.forms[0].group1;
var movies = ["https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_UY268_CR9,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]
var link = ["https://www.imdb.com/title/tt0120915/?ref_=fn_ft_tt_4","https://www.imdb.com/title/tt0121765/?ref_=fn_ft_tt_9" , "https://www.imdb.com/title/tt0121766/?ref_=fn_ft_tt_10" , "https://www.imdb.com/title/tt0076759/?ref_=fn_ft_tt_1" , "https://www.imdb.com/title/tt0080684/?ref_=fn_ft_tt_11" , "https://www.imdb.com/title/tt0086190/?ref_=fn_ft_tt_12"]

    for (i = 0; i < obj.length ; i++){	  
        if (obj[i].checked){
            document.images[2].src = movies[i];
    document.links[1].href = link[i];
        }
    }
}


