import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useNotesStore = defineStore("storeNotes", {
  state: () => {
    return {
      notes: useStorage("notes", []),
    };
  },
  actions: {
    addtodo(newNoteContent) {
      let currentDate = new Date().getTime().toString();
      let note = {
        id: currentDate,
        content: newNoteContent,
      };

      this.notes.unshift(note);
    },
    deteletodo(idtoDelete) {
      this.notes = this.notes.filter((note) => {
        return note.id !== idtoDelete;
      });
    },
    updatetodo(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id === id)[0].content;
      };
    },
    totalNoteCount: (state) => {
      return state.notes.length;
    },
    totalCharacterCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
