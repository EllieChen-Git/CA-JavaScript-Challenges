let movies = [
    {
        "title": "The Shawshank Redemption",
        "duration": "PT142M",
        "actors": [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ],
        "ratings": [],
        "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]
    },
    {
        "title": "The Godfather",
        "duration": "PT175M",
        "actors": [ "Marlon Brando", "Al Pacino", "James Caan" ],
        "ratings": [],
        "watchlist": [62289, 66380, 34139, 6146]
    },
    {
        "title": "The Dark Knight",
        "duration": "PT152M",
        "actors": [ "Christian Bale", "Heath Ledger", "Aaron Eckhart" ],
        "ratings": [],
        "watchlist": [51417, 62289, 6146, 71389, 7001]
    },
    {
        "title": "Pulp Fiction",
        "duration": "PT154M",
        "actors": [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ],
        "ratings": [],
        "watchlist": [7001, 9250, 34139, 6146]
    },
    {
        "title": "Schindler's List",
        "duration": "PT195M",
        "actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
        "watchlist": [15291, 51417, 7001, 9250, 93707]
    }];
    
    let users = [
    {
        "userId": 15291,
        "email": "Constantin_Kuhlman15@yahoo.com",
        "friends": [7001, 51417, 62289]
    },
    {
        "userId": 7001,
        "email": "Keven6@gmail.com",
        "friends": [15291, 51417, 62289, 66380]
    }, 
    {
        "userId": 51417,
        "email": "Margaretta82@gmail.com",
        "friends": [15291, 7001, 9250]
    },
    {
        "userId": 62289,
        "email": "Marquise.Borer@hotmail.com",
        "friends": [15291, 7001]
    }
    ];
    
    /*
        E.g. topWatchlistedMoviesAmongFriends(62289)
        should return: ["Schindler's List", "Pulp Fiction", "The Dark Knight", "The Shawshank Redemption"]
    */
    
    
    
    function topWatchlistedMoviesAmongFriends(id) {
        
        //const user = users.filter(u => u.userId === id)[0];
        let user;
    
        for (u of users){
            if (u.userId === id){
                user = u;
                break;
            }
        }
    
        let friends = {};
        if (user) {
            friends = user.friends;
        }
    
        let watchedListObj = {};
    
        for (f of friends) {
    
            for (m of movies) {
    
                if (m.watchlist.includes(f)){
                    
                    if(watchedListObj[m.title]++){
                        watchedListObj[m.title]++;
                    } else {
                        watchedListObj[m.title] = 1;
                    }
                }
            }
    
        }
    
        watchedListArr = [];
        for (let key in watchedListObj){
            tmp = {}
            tmp[key] = watchedListObj[key];
            watchedListArr.push( tmp );
        }
    
        let result = watchedListArr.sort(
            function compareFunction(m1, m2){
    
                key1 = Object.keys(m1)[0];
                value1 = m1[key1];
            
                key2 = Object.keys(m2)[0];
                value2 = m2[key2];
                
                let ret = value2 - value1;
            
                if (ret === 0) {
                    if (key1 < key2){
                        ret = -1;
                    } else {
                        ret = 1;
                    }
                }
            
                return ret;
            
            }
        ).slice(0,4);
    
        return(result.map(e => Object.keys(e)[0]));
    
    }
    
    console.log(topWatchlistedMoviesAmongFriends(15291));