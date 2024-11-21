"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import BlogGridMain from "./blog-grid";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle='Blog' />
            <HeaderOne />
            <BreadCrumb title="Blog" innerTitle="Blog" />
            <BlogGridMain />
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default BlogGrid;