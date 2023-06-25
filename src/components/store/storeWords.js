import { makeAutoObservable, runInAction } from "mobx";

class Words {
  words = [];
  isLoaded = false;
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadData = async () => {
    // если данные уже были загружены или их уже кто-то загружает
    // то ничего не делаем
    if (this.isLoaded || this.isLoading) {
      return;
    }

    // пока все синхронно
    // поэтому runInAction не нужен
    this.isLoading = true;

    // загрузка с сервера (тут должен быть fetch)
    // асинхронно
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    const data = await response.json();

    // так как код выше выполнялся асинхронно
    // то теперь меняя данные в MobX
    // надо явно указать на эти изменения
    // с помощью функции runInAction
runInAction(() => {
  this.words = data;
  this.isLoading = false;
  this.isLoaded = true;
});
};

addWord = async (id, newWord) => {
  this.isLoading = true;
  
  try {
    const response = await fetch(
      `http://itgirlschool.justmakeit.ru/api/words/${id}/add`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      }
    );

    if (response.ok) {
      runInAction(() => {
        this.words.push(newWord);
      });
    } else {
      throw new Error("Try again");
    }
  } catch (error) {
    runInAction(() => {
      this.error = error;
    });
    return "Failed to add word";
  } finally {
    runInAction(() => {
      this.isLoading = false;
    });
  }
};

//   addWord = async (id, newWord) => {
//     //this.isLoading = true;
//     console.log("addWord");
//     // try {
//     //   fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/add`, {
//     //     method: "POST",
//     //     mode: "cors",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify(newWord),
//     //   });

    
//   try {
//     const response = await fetch(
//       `http://itgirlschool.justmakeit.ru/api/words/${id}/add`,
//       {
//         method: "POST",
//         mode: "cors",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newWord),
//       }
//     );

//       if (response.ok) {
//         runInAction(() => {
//           this.words = this.words.map((word) =>
//             word.id === id ? { ...word, ...newWord } : word
//           );
//         });
//       } else {
//         throw new Error("Try again");
//       }
//     } catch (error) {
//       runInAction(() => {
//         this.error = error;
//       });
//       return "Failed to add word";
//     } finally {
//       runInAction(() => {
//         this.words = newWord;
//         this.words.push(newWord);
//         this.isLoading = false;
//       });
//     }

// //         .then((response) => {
// //           if (response.ok) {
// //             return response.json();
// //           } else {
// //             throw new Error("Try again");
// //           }
// //         })
// //         .then(() => {
// //           this.isLoading = false;
// //           this.words.push(newWord);
// //         });
// //     } catch (error) {
// //       this.isLoading = false;
// //       this.error = error;
// //       return "Fail to add word";
// //     }
// //     runInAction(() => {
// //   this.isLoading = false;
// //   this.isLoaded = true;
// // });
//   }

editWord = async (id, newWord) => {
  this.isLoading = true;

  try {
    const response = await fetch(
      `http://itgirlschool.justmakeit.ru/api/words/${id}/update`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      }
    );

    if (response.ok) {
      runInAction(() => {
        this.words = this.words.map((word) =>
          word.id === id ? { ...word, ...newWord } : word
        );
      });
    } else {
      throw new Error("Try again");
    }
  } catch (error) {
    runInAction(() => {
      this.error = error;
    });
    return "Failed to edit word";
  } finally {
    runInAction(() => {
      this.isLoading = false;
    });
  }
};

  deleteWord = async (id, word) => {
    console.log("delete");
    try {
      const data = await fetch(`/api/words/${id}/delete`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(word),
      });

      const json = await data.json();

      console.log(json);
    } catch (err) {
      return "Fail to delete word";
    }
  }
}

export default Words;