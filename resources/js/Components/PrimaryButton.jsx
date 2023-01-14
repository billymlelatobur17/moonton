import PropTypes from "prop-types";

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "warning", "danger",'light-outline','white-outline']),
    children: PropTypes.node,
    processing: PropTypes.bool,
}
export default function PrimaryButton({ type = 'submit', className = '', processing, children, onClick, variant = 'primary' }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`rounded-2xl bg-alerange py-[13px] text-center w-full ${processing && "opacity-30"} btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
