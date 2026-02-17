import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { SkillCategoryKey, SkillsSection } from './interfaces/skills.model';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-skills',
  imports: [TranslatePipe, NgClass],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit{
	private translate = inject(TranslateService);

	public skills = signal<SkillsSection | null>(null);
	public selectedCategory = signal<SkillCategoryKey>('frontend');

	ngOnInit(): void {
		this.loadSkills();

		this.translate.get('skills').subscribe((data) => {
			this.skills.set(data);
		});
	}

	private loadSkills(): void {
		this.translate.get('skills').subscribe((data: SkillsSection) => {
			this.skills.set(data);
		});
	}

	public currentCategory = computed(() => {
		const key = this.selectedCategory();
		return this.skills()?.categories[key];
	});

	public changeCategory(category: SkillCategoryKey): void {
		this.selectedCategory.set(category);
	}

}