/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['./src'],
        prependData: `
            @import '/src/shared/styles/mixins/common.scss';
            @import '/src/shared/styles/mixins/text.scss';
        `
    }
}

export default nextConfig
