<script setup>
import { useNotesStore } from "../stores/storeNote";
import { useWatchCharacter } from "@/use/useWatchCharacter";
import { ref } from "vue";
let storeNotes = useNotesStore();
let content = ref("");
useWatchCharacter(content, 50);
</script>

<template>
  <div class="stats">
    <h1>start</h1>

    <table class="table">
      <thead>
        <tr>
          <th>stat</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNoteCount }}</td>
        </tr>
        <tr>
          <td>Number of characters</td>
          <td>{{ storeNotes.totalCharacterCount }}</td>
        </tr>

        <tr></tr>
      </tbody>
    </table>
  </div>
</template>
<style>
.table,
th,
td {
  border-collapse: collapse;
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  width: 100%;
}
.table th {
  text-align: left;
}
</style>
