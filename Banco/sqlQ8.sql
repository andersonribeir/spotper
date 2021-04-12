--a
select * from album where Preco>(select avg(Preco) from album)


--d
SELECT DISTINCT p.nome from Playlist p inner join Faixa_Playlist fp on fp.playlist_cod_fk=p.cod
Inner join Faixa f on f.num_faixa=fp.faixa_num_faixa_fk 
inner join Composicao c on c.cod_composicao=f.cod_composicao_fk and c.tipo_composicao='concerto'
inner join Faixa_compositor fc on fc.faixa_num_faixa_fk=f.num_faixa 
inner join Compositor com on fc.compositor_cod_compositor_fk=com.cod_compositor
inner join Periodo_Musical pm on pm.cod_periodo_musical=com.cod_periodomusical_fk AND pm.nome='Barroco'