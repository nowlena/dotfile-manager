" ::::::::::::::::::::::::::::::::::::::::::::::::
" VISUAL
" ::::::::::::::::::::::::::::::::::::::::::::::::
" theme colors
if (has("termguicolors"))
  set termguicolors
endif
set background=dark

" dracula pro
packadd! dracula_pro
let g:dracula_colorterm = 0
colorscheme dracula_pro

" numbers
set relativenumber

" airline config
let g:airline_theme = 'onedark'
let g:airline_powerline_fonts = 1

" rainbow matching brackets
let g:rainbow_active = 1

" make matching tags more apparent
let g:mta_filetypes = { 'javascript.jsx': 1 }

" show trailing spaces
autocmd VimEnter * EnableWhitespace

" easier cursor view in insert mode
set guicursor=n-v-c:block,i-ci-ve:ver25,r-cr:hor20,o:hor50,a:blinkwait700-blinkoff400-blinkon250-Cursor/lCursor,sm:block-blinkwait175-blinkoff150-blinkon175

" easy comment line with ctrl + /
if has('win32')
  nmap <C-/> <Plug>CommentaryLine
  vmap <C-/> <Plug>Commentary
else
  nmap <C-_> <Plug>CommentaryLine
  vmap <C-_> <Plug>Commentary
endif

" nerd tree settings
let g:NERDTreeShowHidden = 1
let g:NERDTreeShowLineNumbers = 1
let g:NERDTreeMinimalUI = 1
let g:NERDTreeDirArrows = 1
let g:NERDTreeIgnore = ['^node_modules$[[dir]]']
let g:NERDTreeWinSize=35
" nerd tree git
let g:NERDTreeGitStatusUseNerdFonts = 1
" nerd tree devicons
let g:WebDevIconsNerdTreeBeforeGlyphPadding = ''
let g:WebDevIconsUnicodeDecorateFolderNodes = v:true

" Include coc config
if filereadable(expand("~/.config/nvim/coc_init.vim"))
 source ~/.config/nvim/coc_init.vim
endif
