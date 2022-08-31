<script setup>
import { ref, onMounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useNotesStore } from "../stores/storeNote";
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	noteID: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		default: "",
	},
});
const store = useNotesStore();

const emit = defineEmits(["update:modelValue", "delete"]);
const modalRef = ref(null);

// close modal emit
const closeModal = () => {
	emit("update:modelValue", false);
};
// close outside
onClickOutside(modalRef, closeModal);

onMounted(() => {
	document.addEventListener("keyup", (e) => {
		if (e.key === "Escape") closeModal();
	});
});
</script>

<!-- click escape key to close modal -->

<template>
	<Teleport to="#modal">
		<Transition name="modal">
			<div class="modal-bg" v-if="modelValue">
				<div class="modal" ref="modalRef">
					<div class="modal_header" @click="closeModal">
						<span
							class="iconify"
							data-icon="heroicons-solid:x"
						></span>
					</div>
					<p class="content">{{ label }}</p>

					<div class="save_dele">
						<button class="cancel" @click="closeModal">
							Cancel
						</button>
						<slot name="button"></slot>
					</div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<style>
.modal-bg {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	display: grid;
	place-content: center;
}

.modal_header {
	width: fit-content;
	cursor: pointer;
	margin-bottom: 20px;
	margin-left: auto;
}

.modal_header .iconify {
	font-size: 25px;
	color: #dd2750;
	pointer-events: none;
}

.modal {
	position: relative;
	background-color: #fff;
	width: 300px;
	padding: 10px;
	box-shadow: 0px 10px 5px 2px rgba(0, 0, 0, 0.1);
}

.save_dele {
	display: flex;
	justify-content: center;
	gap: 15px;
}

.save_dele button {
	padding: 10px 15px;
	border-radius: 5px;
	color: #fff;
	font-size: 15px;
}

.save_dele .cancel {
	background-color: rgb(128, 128, 128);
}

.save_dele .delete {
	background-color: #dd2750;
}

.save_dele .delete:active {
	background-color: #dd2751ed;
}

span {
	display: block;
}

.content {
	font-size: 18px;
	text-align: center;
	margin-bottom: 25px;
}

.modal-enter-active,
.modal-leave-active {
	transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
	opacity: 0;
	transform: scale(1.1);
}
</style>
