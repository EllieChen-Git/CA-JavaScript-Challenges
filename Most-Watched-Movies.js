//[Challenge] 1114 Control Structures & Loops - Most Watched Movies Amongst Friends: https://coderacademyedu.github.io/resources/afternoon_challenge_most_watched_movies.html

// Pseudocode:
    // 1. return friends of a user
    // 2. return movies watched from friends of a user
    // 3. sort movies by watchlist counts
    // 4. sort movies with equal watchlist counts in alphabetical order
    // 5. show the top four watched movies (If there are no such movies, then an empty list should be returned or as many movies as possible.)

    let users = [{
        "userId": 15291,
        "email": "Constantin_Kuhlman15@yahoo.com",
        "friends": [7001, 51417, 62289]
        },    {
        "userId": 7001,
        "email": "Keven6@gmail.com",
        "friends": [15291, 51417, 62289, 66380]
        },    {
        "userId": 51417,
        "email": "Margaretta82@gmail.com",
        "friends": [15291, 7001, 9250]
        },    {
        "userId": 62289,
        "email": "Marquise.Borer@hotmail.com",
        "friends": [15291, 7001]
        }];
    
    let movies = [{
        "title": "The Shawshank Redemption",
        "duration": "PT142M",
        "actors": [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ],
        "ratings": [],
        "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]
        },  {
        "title": "The Godfather",
        "duration": "PT175M",
        "actors": [ "Marlon Brando", "Al Pacino", "James Caan" ],
        "ratings": [],
        "watchlist": [62289, 66380, 34139, 6146]
        },  {
        "title": "The Dark Knight",
        "duration": "PT152M",
        "actors": [ "Christian Bale", "Heath Ledger", "Aaron Eckhart" ],
        "ratings": [],
        "watchlist": [51417, 62289, 6146, 71389, 7001]
        },  {
        "title": "Pulp Fiction",
        "duration": "PT154M",
        "actors": [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ],
        "ratings": [],
        "watchlist": [7001, 9250, 34139, 6146]
        },  {
        "title": "Schindler's List",
        "duration": "PT195M",
        "actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
        "watchlist": [15291, 51417, 7001, 9250, 93707]
        }];
        
    
        function topWatchlistedMoviesAmongFriends(user) {
    
            //1. Return an array: a user's friends
            userFriends = function(user){
                for (i = 0; i < users.length; i++)
                if (user === users[i].userId){
                    return users[i].friends;
                }
            }
            // console.log(userFriends(user));
    
            //2. Return an array: all movies watched by a user's friends
            let friendsMovies = [];
            for (k = 0; k < userFriends(user).length; k++)
            for (j = 0; j < movies.length; j++){
                if (movies[j].watchlist.includes(userFriends(user)[k])){
                    friendsMovies.push(movies[j].title)
                }
            }
            // console.log(friendsMovies)
    
            //3. Return an object (key: movie title, value: watchlist counts)
            let moviesCount = {}, l, movie;                                
            for (l = 0; l < friendsMovies.length; l++) {
                movie = friendsMovies[l];
                if (typeof moviesCount[movie] === "undefined") {      //first time counting a movie, the datatype of it is 'undefined'
                    moviesCount[movie] = 1;                           //so we set the initial count equals to '1' here
                } else {
                    moviesCount[movie]++;
                }
            }
            // console.log(moviesCount);
    
            
            // 4. Return an array: Sort movies by watchlist counts (from most watched to least watched)
            // Read 'compareFunction(a, b)' https://devdocs.io/javascript/global_objects/array/sort to see how to sort movies in correct order
            let moviesSorted = Object.keys(moviesCount).sort(
                function(a,b){
                if (moviesCount[b] > moviesCount[a]) {
                    return 1
                } else if (moviesCount[b] < moviesCount[a]){
                    return -1;
                } else { // 5. sort movies with equal watched counts alphabetically
                    if (b > a) {
                        return -1
                    } else if (b < a){
                        return 1;
                    } else {
                        return 0;
                    }
                }
            })
            // console.log(moviesSorted);   
            
            // 6. Return an array: Only show the top 4 watched movies
            let result = moviesSorted.slice(0, 4);
            console.log(result)
    
        }
        topWatchlistedMoviesAmongFriends(62289) //["Schindler's List", "Pulp Fiction", "The Dark Knight", "The Shawshank Redemption"]
        topWatchlistedMoviesAmongFriends(15291) //["The Dark Knight", "Schindler's List", "The Shawshank Redemption", "Pulp Fiction"]
    
    