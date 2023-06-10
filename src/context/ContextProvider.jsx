import { createContext, useState, useEffect } from "react";

export const WordsContext = createContext();

export const ContextProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function loadData() {
    setIsLoading(true);
    try {
      fetch("http://itgirlschool.justmakeit.ru/api/words")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error while loading");
          }
        })
        .then((data) => {
          setIsLoading(false);
          setWords(data);
        });
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

//   async function addWord(newWord) {
//     setWords([...words, json]);
//     console.log("post");
//     try {
//       const data = await fetch("/api/words/add", {
//         method: "POST",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newWord),
//       });

//       const json = await data.json();

//       console.log(json);
//     } catch (err) {
//       return "Что-то пошло не так";
//     }
//   }

//   async function updateWord(id, word) {
//     const index = words.findIndex((item) => item.id === word.id);
//     words[index] = word;
//     setWords([...words]);
//     console.log("update");
//     try {
//       const data = await fetch(`/api/words/${id}/update`, {
//         method: "POST",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(word),
//       });

//       const json = await data.json();

//       console.log(json);
//     } catch (err) {
//       return "Не получилось редактировать слово";
//     }
//   }

async function deleteWord(id, newWord) {
  // const index = words.findIndex((item) => item.id === word.id);
  // words.splice([index], 1);
  // setWords([...words]);

  console.log("delete");

  try {
    fetch(`/api/words/${id}/delete`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("попробуйте еще раз");
        }
      })
      .then((data) => {
        setIsLoading(false);
        setWords((prevWords) => prevWords.filter((word) => word.id !== id));
      });
  } catch (error) {
    setIsLoading(false);
    setError(error);
    return "Не удалось удалить слово";
  }
  loadData();
}

useEffect(() => {
    loadData();
  }, []);

  //analogue if(isLoading)
  {
    isLoading && <p>Loading...</p>;
  }
  {
    error && <p>{`Ooops, error occured: ${error.message}`}</p>;
  }

  const values = { words, deleteWord };

  return (
    <WordsContext.Provider value={values}>{children}</WordsContext.Provider>
  );
};