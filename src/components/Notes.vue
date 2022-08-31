<script setup>
import { computed, watch, onMounted, ref } from "vue";
import { useNotesStore } from "../stores/storeNote";
import Modal from "../components/Modal.vue";

const props = defineProps({
	note: {
		type: Object,
		required: true,
	},
});
const store = useNotesStore();
const show = ref(false);
function toggle() {
	show.value = !show.value;
}
/* render text length */
const characterLength = computed(() => {
	let length = props.note.content.length;
	let description = length > 1 ? "Characters" : "Character";
	return `${length} ${description}`;
});
</script>
<template>
	<div class="card">
		<div class="card_container">
			<div class="card_content">
				<p>{{ note.content }}</p>
				<div class="text_length">
					<small> {{ characterLength }} </small>
				</div>
			</div>

			<div class="button_section">
				<RouterLink
					:to="`/editNote/${note.id}`"
					class="button_edit button"
					>Edit
				</RouterLink>
				<button class="button_delete button" @click.prevent="toggle">
					Delete
				</button>
			</div>
			<Modal
				v-model="show"
				:noteID="note.id"
				label="Do you want to Delete?"
			>
				<template #button>
					<button class="delete" @click="store.deteletodo(note.id)">
						Delete
					</button>
				</template>
			</Modal>
		</div>
	</div>
</template>
<style scoped>
.text_length {
	width: fit-content;
	margin-left: auto;
	color: rgba(33, 16, 16, 0.358);
}
.button {
	text-align: center;
}
.button_delete {
	background-color: #fff;
}
</style>
