

export type TemplateKey = 'vue2';

export interface TemplateCentent {
  url: string;
  downloadUrl: string;
}

export const template: Record<TemplateKey, TemplateCentent> = {
  vue2: {
    url: 'https://github.com/LHF678/vue2-project-work-template.git',
    downloadUrl: 'direct:https://github.com/LHF678/vue2-project-work-template/archive/refs/heads/main.zip'
  },
};
