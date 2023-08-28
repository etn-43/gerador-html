import LinkList from "../linkslist/linkslist"

function HeaderItens (){
    const links = [
        { text: 'Gerador HTML', url: '/'},
        { text: 'Tutorial', url: '/tutorial'},
      ];
    return (
        <div>
            <LinkList links={links} />
        </div>
    )
}

export default HeaderItens