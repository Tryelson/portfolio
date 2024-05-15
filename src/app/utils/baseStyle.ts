import { defineStyleConfig } from "@chakra-ui/react";

export const LinkBaseStyle = defineStyleConfig({
    variants: {
        primary: {
            display: 'flex',
            width: '100%',
            transition: 'all 0.3s ease-in-out',
            borderRadius: '8px',
            padding: '20px',

            _hover: {
                background: 'rgb(100 116 139 / 14%)',
                textDecoration: 'none',
                boxShadow: '0 5px 16px 1px rgb(0 0 0 / 30%)'
            }
        }
    }
})