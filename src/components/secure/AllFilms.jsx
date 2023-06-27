import {CheckOutlined, SearchOutlined} from '@ant-design/icons';
import {Button, Input, Space, Table} from 'antd';
import {useEffect, useRef, useState} from 'react';
import Highlighter from 'react-highlight-words';
import FilmsApiWorker from "../../films_worker_api/FilmsApiWorker";
import LocalStorageWorker from "../../store/LocalStorageWorker";


const AllFilms = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    let filmsApiWorker = new FilmsApiWorker();
    let localStorageWorker = new LocalStorageWorker();
    let [data, setData] = useState([]);
    const getAllFilms = () => {
        let token = localStorageWorker.getToken();

        filmsApiWorker.getAllFilms(token)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log("getAllFilms ERRRROR");
            });
    }
    useEffect(() => {
        getAllFilms();
    }, []);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters, close}) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: '1',
            width: '15%',
            ...getColumnSearchProps('name'),

        },
        {
            title: 'Дата выхода',
            dataIndex: 'releaseYear',
            key: '2',
            width: '10%',
            sorter: (a, b) => a.releaseYear - b.releaseYear,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Длительность',
            dataIndex: 'duration',
            key: '3',
            width: '10%',
            sorter: (a, b) => b.duration - a.duration,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Описание',
            dataIndex: 'description',
            key: '4',
        },
        {
            title: 'Жанр',
            dataIndex: 'styleFilmName',
            key: '5',
            width: '10%',
        },
        {
            title: 'Посмотрю',
            dataIndex: 'ButtonAddFilm',
            key: '6',
            width: '2%',
            render:()=><a><CheckOutlined style={{fontSize:'23px', color:'green',flex:1,alignItems:'center' }}/></a>

        }
    ];
    return <Table columns={columns} dataSource={data}/>;
};
export default AllFilms;