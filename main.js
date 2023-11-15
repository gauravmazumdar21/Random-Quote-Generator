const quotes = [
    {
        text: "An eye for an eye only ends up making the whole world blind.",
        author: "Mahatma Gandhi"
      },
      {
        text: "The only alternative to coexistence is codestruction.",
        author: "Jawaharlal Nehru"
      },
      {
        text: "Give me blood, and I shall give you freedom.",
        author: "Subhas Chandra Bose"
      },
      {
        text: "It takes a loud voice to make the deaf hear.",
        author: "Bhagat Singh"
      },
      {
        text: "Every citizen of India must remember that he is an Indian and he has every right in this country but with certain duties.",
        author: "Sardar Patel"
      },
      {
        text: "We fight for independence. In the words of Lord Krishna, we will if we are victorious, enjoy the fruits of victory, if defeated and killed on the field of battle, we shall surely earn eternal glory and salvation.",
        author: "Rani Lakshmibai"
      },
      {
        text: "Freedom is our birthright, and we shall have it.",
        author: "Durgawati Devi"
      },
      {
        text: "If I had the power to influence Indian journals, I would have the following headlines printed in bold letters on the first page: Milk for the infants, Food for the adults, Education for the children, and Liberty for all.",
        author: "Lala Lajpat Rai"
      },
      {
        text: "I am confident that my death will do more to smash the British Empire than my release.",
        author: "Ashfaqulla Khan"
      },
      {
        text: "We want deeper sincerity of motive, a greater courage in speech and earnestness in action.",
        author: "Sarojini Naidu"
      }
]


function handleClick(){
    const random_num = Math.floor(Math.random() * quotes.length)

    document.getElementById("quotesArea").innerHTML = quotes[random_num].text
    document.getElementById("authorName").innerHTML = `- ${quotes[random_num].author}`
}

