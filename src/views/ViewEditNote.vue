<!-- script  -->
<script setup>
import { ref } from "vue";
import AddEditNote from "../components/AddEditNote.vue";
import { useNotesStore } from "../stores/storeNote";
import { useRoute, useRouter } from "vue-router";
import Modal from "../components/Modal.vue";

const noteContent = ref("");
const noteRef = ref(null);
const show = ref(false);
const noteStore = useNotesStore();
const route = useRoute();
const router = useRouter();
noteContent.value = noteStore.getNoteContent(route.params.id);

/* Save click  */
function handleSaveClick() {
	noteStore.updatetodo(route.params.id, noteContent.value);
	router.push("/");
}
</script>

<template>
	<div class="edit-note">
		<AddEditNote
			v-model="noteContent"
			ref="noteRef"
			bg-color="link"
			label="Edit note"
			placeholder="Edit Note"
			flex="flex"
		>
			<template #buttons>
				<div class="button">
					<button class="cancel_btn" @click.prevent="$router.back()">
						Cancel
					</button>
					<button
						class="submit_btn"
						@click.prevent="show = true"
						:disabled="!noteContent"
					>
						Save note
					</button>
				</div>
			</template>
		</AddEditNote>
		<Modal v-model="show" label="Do you want to save?">
			<template #button>
				<button class="yesbtn" @click="handleSaveClick">Yes</button>
			</template>
		</Modal>
	</div>
</template>

<!-- style -->
<style scoped>
.link {
	padding: 10px 15px;
}

.button {
	display: flex;
	justify-content: flex-end;
	padding: 0;
	border: none;
	gap: 25px;
}
.yesbtn {
	color: #fff;
	background-color: rgba(0, 128, 0, 0.67);
}
.cancel_btn {
	background-color: rgb(128, 128, 128);
	border-radius: 5px;
	color: #fff;
	padding: 10px 15px;
}
</style>
