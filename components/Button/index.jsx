export default function Button({ text }) {
    return (
        <button type="button" class="text-white rounded-full inline-flex items-center px-12 py-4 border border-white shadow-sm text-sm rounded-md">
            { text }
        </button>
    );
}