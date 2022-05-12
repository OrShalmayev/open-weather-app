export type TSharedComponentStatus = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

export type TSharedComponentSize = 'xs' | 'sm' | 'md' | 'lg';
export type TSharedButtonWidth = 'primary' | 'secondary' | undefined;
export type TSharedIcon =
    | 'compare'
    | 'review-docs'
    | 'print'
    | 'more-options'
    | 'create-doc'
    | 'copy'
    | 'cog-solid'
    | 'close'
    | 'archive-solid'
    | 'download'
    | 'exchange'
    | 'user-placeholder'
    | 'user'
    | 'star-empty'
    | 'star-full'
    | 'loop'
    | 'left-arrow'
    | 'spreadsheet'
    | 'curva-abc'
    | 'files-list'
    | 'dashed-eye'
    | 'reorder'
    | 'action'
    | 'add-provider'
    | 'attach'
    | 'eye-open'
    | 'history'
    | 'information'
    | 'open-budget'
    | 'resend'
    | 'send-ok'
    | 'send'
    | 'upload-document-check'
    | 'upload-document'
    | 'check'
    | 'filter'
    | 'timer'
    | 'filter-bars'
    | 'bell'
    | 'toggle-theme'
    | 'caret-down'
    | 'logo'
    | 'menu'
    | 'search'
    | 'edit'
    | 'calendar'
    | 'direction-arrow'
    | 'trash-alt'
    | 'plus'
    | 'drag-n-drop'
    | 'trash'
    | 'right-arrow'
    | 'budget-configuration'
    | 'budget-plan'
    | 'correct'
    | 'error'
    | 'caret-up'
    | 'plus-circle'
    | 'add'
    | 'sum'
    | 'notification'
    | 'spin'
    | 'file-pdf'
    | 'arrow-left2'
    | 'home'
    | 'icon-compare'
    | 'icon-review-docs'
    | 'icon-print'
    | 'icon-more-options'
    | 'icon-create-doc'
    | 'icon-copy'
    | 'icon-cog-solid'
    | 'icon-close'
    | 'icon-archive-solid'
    | 'icon-download'
    | 'icon-exchange'
    | 'icon-user-placeholder'
    | 'icon-user'
    | 'icon-star-empty'
    | 'icon-star-full'
    | 'icon-loop'
    | 'icon-left-arrow'
    | 'icon-spreadsheet'
    | 'icon-curva-abc'
    | 'icon-files-list'
    | 'icon-dashed-eye'
    | 'icon-reorder'
    | 'icon-action'
    | 'icon-add-provider'
    | 'icon-attach'
    | 'icon-eye-open'
    | 'icon-history'
    | 'icon-information'
    | 'icon-open-budget'
    | 'icon-resend'
    | 'icon-send-ok'
    | 'icon-send'
    | 'icon-upload-document-check'
    | 'icon-upload-document'
    | 'icon-check'
    | 'icon-filter'
    | 'icon-timer'
    | 'icon-filter-bars'
    | 'icon-bell'
    | 'icon-toggle-theme'
    | 'icon-caret-down'
    | 'icon-logo'
    | 'icon-menu'
    | 'icon-search'
    | 'icon-edit'
    | 'icon-calendar'
    | 'icon-direction-arrow'
    | 'icon-trash-alt'
    | 'icon-plus'
    | 'icon-drag-n-drop'
    | 'icon-trash'
    | 'icon-right-arrow'
    | 'icon-budget-configuration'
    | 'icon-budget-plan'
    | 'icon-correct'
    | 'icon-error'
    | 'icon-caret-up'
    | 'icon-plus-circle'
    | 'icon-add'
    | 'icon-sum'
    | 'icon-notification'
    | 'icon-spin'
    | 'icon-file-pdf'
    | 'icon-arrow-left2'
    | 'icon-home'
    | 'shared-icon-check-inactive'
    | 'shared-icon-checked'
    | 'shared-icon-icon-tooltip'
    | 'shared-icon-msg-error'
    | 'shared-icon-msg-success'
    | 'shared-icon-msg-black'
    | 'shared-icon-last-call-inative'
    | 'shared-icon-last-call'
    | 'shared-icon-frozen'
    | 'shared-icon-expand-arrow-left'
    | 'shared-icon-expand-arrow-left-hover'
    | 'shared-icon-expand-arrow-right'
    | 'shared-icon-expand-arrow-right-hover'
    | 'shared-icon-logo'
    | 'shared-icon-criar-doc'
    | 'shared-icon-imprimir'
    | 'shared-icon-abrir-budget'
    | 'shared-icon-revisar-budget'
    | 'shared-icon-engrenagem'
    | 'shared-icon-duplicate'
    | 'shared-icon-calendar-x'
    | 'shared-icon-calendar-check'
    | 'shared-icon-seta-cima-clara'
    | 'shared-icon-seta-baixo-clara'
    | 'shared-icon-seta-esquerda'
    | 'shared-icon-seta-direita'
    | 'shared-icon-circulo-vermelho'
    | 'shared-icon-alerta-cheio'
    | 'shared-icon-error'
    | 'shared-icon-alert'
    | 'shared-icon-success'
    | 'shared-icon-retangulo-cinza'
    | 'shared-icon-retangulo-azul'
    | 'shared-icon-dolly-flatbed'
    | 'shared-icon-lock';

const iconPaths: [TSharedIcon, number][] = [
    ['shared-icon-last-call', 2],
    ['shared-icon-expand-arrow-left-hover', 3],
    ['shared-icon-expand-arrow-right-hover', 3],
    ['shared-icon-logo', 6],
    ['shared-icon-revisar-budget', 7],
    ['shared-icon-calendar-x', 2],
    ['shared-icon-calendar-check', 2],
    ['shared-icon-last-call-inative', 2],
    ['icon-send-ok', 5],
    ['icon-bell', 4],
];

export const iconsPathMap = new Map<TSharedIcon, string[]>(
    iconPaths.map(([icon, paths]) => [icon, Array.from({length: paths}, (_, index) => `path${index + 1}`)])
);
