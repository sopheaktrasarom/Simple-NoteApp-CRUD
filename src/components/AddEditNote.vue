<script setup>
import { ref } from "vue";
const props = defineProps({
	modelValue: {
		type: String,
		require: true,
	},
	bgColor: {
		type: String,
		default: "success",
	},
	label: {
		type: String,
		default: "Add note",
	},
	placeholder: {
		type: String,
		default: "Enter Note",
	},
	flex: {
		type: String,
	},
});
const emit = defineEmits(["update:modelValue"]);

const textareaRef = ref(null);
const focusTextArea = () => {
	textareaRef.value.focus();
};
defineExpose({
	focusTextArea,
});
const vAutofocus = {
	mounted: (el) => {
		el.focus();
	},
};
</script>

<template>
	<form class="form" :class="bgColor">
		<p>{{ props.label }}</p>
		<textarea
			class="form-control"
			rows="3"
			v-model="modelValue"
			:placeholder="placeholder"
			ref="textareaRef"
			@input="$emit('update:modelValue', modelValue)"
			v-autofocus
		></textarea>
		<!-- button slot name -->
		<slot name="buttons"></slot>
	</form>
</template>
