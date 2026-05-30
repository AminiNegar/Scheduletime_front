# تنظیم Router

## مسیرهای موجود (Routes)

سیستم routing پروژه شما به صورت زیر تنظیم شده است:

| مسیر | صفحه | توضیح |
|------|------|--------|
| `/` | Home | صفحه اصلی |
| `/calendar` | CalendarPage | صفحه تقویم |
| `/requests` | RequestsPage | صفحه درخواست‌ها |
| `/requests-board` | RequestsBoard | تخته درخواست‌ها |

## نحوه استفاده

### 1. استفاده از Link برای ناوبری
```jsx
import { Link } from 'react-router-dom';

<Link to="/calendar">برو به صفحه تقویم</Link>
```

### 2. استفاده از useNavigate (برای navigate برنامه‌ریزی شده)
```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/requests');
  };
  
  return <button onClick={handleClick}>برو</button>;
}
```

### 3. دریافت پارامترهای مسیر
```jsx
import { useParams } from 'react-router-dom';

function RequestDetail() {
  const { id } = useParams(); // مثلا /requests/:id
  return <div>ID: {id}</div>;
}
```

## افزودن مسیر جدید

برای اضافه کردن صفحه جدید:

1. صفحه رو در پوشه `src/` بسازید
2. در `App.js` import کنید:
```jsx
import NewPage from './NewPage/NewPage';
```

3. مسیر رو اضافه کنید:
```jsx
<Route path="/new-page" element={<NewPage />} />
```

4. در Sidebar لینک اضافه کنید:
```jsx
<Link to="/new-page" className="block">
  <li>صفحه جدید</li>
</Link>
```

## توجه
- Sidebar خودکار هنگام کلیک بر روی لینک بسته می‌شود (`onClose` فراخوانی می‌شود)
- تمام صفحات داخل `<Routes>` rendering می‌شوند
- Header و Sidebar در تمام صفحات نمایش داده می‌شوند
