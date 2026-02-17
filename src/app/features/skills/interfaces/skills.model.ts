export interface SkillItem {
    name: string;
    image: string;
}

export interface SkillCategory {
    title: string;
    items: SkillItem[];
}

export interface SkillsSection {
    sectionTitle: string;
    sectionSubtitle: string;
    categories: {
        frontend: SkillCategory;
        backend: SkillCategory;
        tools: SkillCategory;
    };
}

export type SkillCategoryKey = 'frontend' | 'backend' | 'tools';