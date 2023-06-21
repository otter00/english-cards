import { makeAutoObservable, runInAction } from "mobx";

class Words {
  words = [];
  isLoaded = false;
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadData() {
    try {
      this.isLoading(true);
      this.isLoaded(false);
      fetch("http://itgirlschool.justmakeit.ru/api/words")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Try again");
          }
        })
        .then((data) => {
          this.isLoading = false;
          this.isLoaded = true;
          this.words = data;
        });
    } catch (error) {
      this.error = error;
      this.isLoading = false;
      this.isLoaded = false;
    }
  }

  async addWord(newWord) {
    this.isLoading = true;
    console.log("addWord");
    try {
      fetch("api/words/add", {
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
            throw new Error("Try again");
          }
        })
        .then(() => {
          this.isLoading = false;
          this.words.push(newWord);
        });
    } catch (error) {
      this.isLoading = false;
      this.error = error;
      return "Fail to add word";
    }
    // loadData();
  }

  async editWord(id, newWord) {
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
        this.words.map((word) =>
          word.id === id ? { ...word, ...newWord } : word
        );
      } else {
        throw new Error("Try again");
      }
    } catch (error) {
      this.error = error;
      return "Fail to edit word";
    } finally {
      this.isLoading = false;
    }
  }

  async deleteWord(id, word) {
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

  //   loadData = async () => {
  //     // если данные уже были загружены или их уже кто-то загружает
  //     // то ничего не делаем
  //     if (this.isLoaded || this.isLoading) {
  //       return;
  //     }

  //     // пока все синхронно
  //     // поэтому runInAction не нужены
  //     this.isLoading = true;

  //     // загрузка с сервера (тут должен быть fetch)
  //     // асинхронно
  //     const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
  //     const data = await response.json();

  //     // так как код выше выполнялся асинхронно
  //     // то теперь меняя данные в MobX
  //     // надо явно указать на эти изменения
  //     // с помощью функции runInAction
  // runInAction(() => {
  //   this.words = data;
  //   this.isLoading = false;
  //   this.isLoaded = true;
  // });
  //   };
}
export default Words;