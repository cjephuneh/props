import Book from './Book'
import './App.css'


function App() {
   return (
    <section className="booklist">
      <Book 
          title= "This is our love story"
          author= "caleb jephuneh"
          cost= "$20"
          rating= "5.0"
      />
      <Book
          title= "Be successful in 21 days"
          author= "john the ripper"
          cost= "$29"
          rating= "5.0"
       />
      <Book
          title= "Make money while Sleeping"
          author= "David Einstints"
          cost= "$23"
          rating= "5.0"
       />
      <Book 
          title= "This is the best way earn"
          author= "Mbogholi Jones"
          cost= "$55"
          rating= "5.0"
      />
      <Book 
          title= "How to earn a degree without studying"
          author= "Solomon David"
          cost= "$122"
          rating= "5.0"
      />
      
    </section>
  )
}

export default App
