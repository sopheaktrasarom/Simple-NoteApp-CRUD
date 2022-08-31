<script setup>
import { ref, computed, watch } from "vue";
import Notes from "../components/Notes.vue";
import { useNotesStore } from "../stores/storeNote";
import AddEditNote from "../components/AddEditNote.vue";
import { useWatchCharacter } from "@/use/useWatchCharacter";
let content = ref("");
const addEditNoteRef = ref(null);

/* store notes */
const storeNotes = useNotesStore();
// method to add note
const onSubmit = () => {
	if (content.value.length == 0 || content.value == null) {
		return;
	}
	storeNotes.addtodo(content.value);
	content.value = "";
	addEditNoteRef.value.focusTextArea();
};
// computed to get the notes length
const length = computed(() => {
	let characterlength = content.value.length;
	let description = characterlength > 1 ? "characters" : "character";
	return `${characterlength} ${description}`;
});
// watch
useWatchCharacter(content, 100);
</script>
<template>
	<div class="notes">
		<AddEditNote v-model="content" ref="addEditNoteRef">
			<template #buttons>
				<button
					class="submit_btn"
					@click.prevent="onSubmit"
					:disabled="!content"
				>
					Submit
				</button>
				<p>{{ length }}</p>
			</template>
		</AddEditNote>

		<!-- Card -->
		<Notes v-for="note in storeNotes.notes" :key="note.id" :note="note" />
	</div>
</template>
<style lang="css">
.notes {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.card_container {
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	background-color: #fff;
}

.card_content {
	padding: 25px;
}

textarea {
	width: 100%;
	padding: 15px;
	font-size: 16px;
}

.box {
	width: 150px;
	height: 200px;
	border: 1px solid black;
}

.button_section {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.submit_btn {
	padding: 10px 15px;
	border-radius: 5px;
	background-color: dodgerblue;
	color: #fff;
	transition: 0.5s;
}

.submit_btn:active {
	background-color: rgba(52, 144, 235, 0.772);
}

.submit_btn:disabled {
	background-color: #ccc;
}

.button {
	width: 100%;
	color: blue;
	font-size: 18px;
	padding: 10px 15px;
	border: 1px solid rgba(128, 128, 128, 0.114);
}

.button:first-child {
	border-left: none;
}

.button:last-child {
	border-right: none;
}
</style>
