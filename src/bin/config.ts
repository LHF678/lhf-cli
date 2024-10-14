

export interface TemplateConf {
  url: string;
  downloadUrl: string;
}

export const template: Record<string, TemplateConf> = {
  vue2: {
    url: 'https://github.com/LHF678/vue2-project-work-template.git',
    downloadUrl: 'direct:https://github.com/LHF678/vue2-project-work-template/archive/refs/heads/main.zip'
  },
  vue2H5: {
    url: 'https://github.com/LHF678/vue2-project-work-h5template.git',
    downloadUrl: 'direct:https://github.com/LHF678/vue2-project-work-h5template/archive/refs/heads/master.zip'
  }
};


export const addChoices = [
  { name: '【Vue2】模板', value: 'vue2' },
  { name: '【Vue2 h5】模板', value: 'vue2H5'},
  { name: '【Vue3】模板 --- 模板搭建中', value: 'vue3' },
  { name: '【React】模板 --- 模板搭建中', value: 'react' }
];
