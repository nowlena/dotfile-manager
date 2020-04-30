" ::::::::::::::::::::::::::::::::::::::::::::::::
" VISUAL
" ::::::::::::::::::::::::::::::::::::::::::::::::
" theme colors
set background=dark
colorscheme dracula

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

" Include coc config
if filereadable(expand("~/.config/nvim/coc_init.vim"))
 source ~/.config/nvim/coc_init.vim
endif
