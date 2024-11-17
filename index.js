// variables

var btn = document.querySelector('#newQuote');
var quote = document.querySelector('.quote');
var person = document.querySelector('.person');

const quotes = [{ quote:`"Genius is one percent inspiration and ninety-nine percent perspiration."`,
                person:`Thomas Edison`
            },
    
    {quote:`"You can observe a lot just by watching."`,
    person:`Yogi Berra`
},

{quote:`"The Best way to find your self is to lose in the service of others"`,
    person:`Mahatma Gandhi`
},
{quote:`"Valka oru Vattam Da..Inga thokuravan Jeipan,Jeikiravan Thopan"`,
    person:`Anil VJ`
},
{quote:`"Kanna Panninga tha Kootama Varum, Singam .. Single ah tha varum"`,
    person:`Rajini`
},
{quote:`"Thotta thookanum"`,
    person:`Thooku Durai`
},
{quote:`"Vanakam Da Mapla Theni la irunthu"`,
    person:`Murugan`
},
{quote:`"Bhai Kari Kontu Vannga BHai"`,
    person:`Cheems Mama`
},
{quote:`"pattunu aducha pottunu poirum...oru naal?"`,
person:`Dhanush`
},
{quote:`Dai....Enna da Pnadringa Akka Vanthurukinda.... Poi Padingada`,
person:`Vanavil Akka 😆`
}]

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})


