const books = [
  { title: "The Silent Observatory", authorName: "Lena Marrow", releaseYear: 1998 },
  { title: "Ashfall Protocol", authorName: "Darius Kelm", releaseYear: 2011 },
  { title: "Moonlit Cartography", authorName: "Seren Vale", releaseYear: 2005 },
  { title: "The Glass Navigator", authorName: "Harlan Pierce", releaseYear: 2020 },
  { title: "Orbit of Echoes", authorName: "Mira Solis", releaseYear: 2017 },
  { title: "The Last Archivist", authorName: "Jonas Redd", releaseYear: 1993 },
  { title: "Harmonic Drift", authorName: "Elara Quinn", releaseYear: 2022 },
  { title: "The Painted Constellation", authorName: "Rowan Hale", releaseYear: 2014 },
  { title: "Static in the Garden", authorName: "Callum Wren", releaseYear: 2001 },
  { title: "The Lantern Mechanic", authorName: "Isolde Crane", releaseYear: 1999 },
  { title: "Copperwind Tales", authorName: "Marin Thatch", releaseYear: 2010 },
  { title: "The River That Remembers", authorName: "Avery Locke", releaseYear: 2016 },
  { title: "Fragments of the North", authorName: "Tessa Brine", releaseYear: 2003 },
  { title: "The Clockmaker’s Orchard", authorName: "Elias Thorn", releaseYear: 2019 },
  { title: "Paper Skies", authorName: "Juniper Rowe", releaseYear: 2007 },
  { title: "The Iron Sleepwalker", authorName: "Cassian Holt", releaseYear: 1995 },
  { title: "Whispers of the Deepwood", authorName: "Lyra Fen", releaseYear: 2013 },
  { title: "The Sapphire Ledger", authorName: "Nolan Crest", releaseYear: 2021 },
  { title: "A Map of Borrowed Stars", authorName: "Iris Calder", releaseYear: 2009 },
  { title: "The Ember Manuscript", authorName: "Silas Grey", releaseYear: 2004 }
];

const sortByYear = (book1, book2) =>{

    if(book1.releaseYear < book2.releaseYear){
        return -1;
    }
    else if(book1.releaseYear > book2.releaseYear){
        return 1;
    }
    else{
        return 0;
    }
}

let year = 2019
const filteredBooks = books.filter(book=>book.releaseYear <= year)

const sortedFilterBooks = filteredBooks.sort(sortByYear)
console.log(sortedFilterBooks)
// filteredBooks.sort((a,b)=>sortByYear(a,b))
// console.log(sortByYear(books[1], books[0]));
// console.log("filter",filteredBooks)
